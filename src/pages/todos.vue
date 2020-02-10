<template>
	<div class="container">
		<h1 class="header-title">Marvelous v2.0</h1>
		<div class="delete-all-btn" @click="deleteAll">Delete all tasks</div>
    <div class="flex-container">
			<div>
				<el-input v-model="what" placeholder="Add task" class="inline-block filter-input"/>
				<el-button class="inline-block" type="primary" icon="el-icon-add" @click="add">Add</el-button>
			</div>
      <el-input v-model="search" placeholder="Search" class="filter-input"/>
    </div>

		<div class="flex-container">
			<div class="todo-list">
				<h3>To Do</h3>
				<div class="border-r">
					<label class="todo-item" v-for="item in todo" :for="item.id" :key="item.id" @click="todoClicked(item)">
						<el-checkbox :id="item.id" :value="item.done"/>
						{{item.what}}
					</label>
				</div>
			</div>
			<div class="todo-list">
				<h3>Done</h3>
				<div>
					<label class="todo-item" v-for="item in done" :for="item.id" :key="item.id" @click="todoClicked(item)">
						<el-checkbox :id="item.id" :value="item.done"/>
						{{item.what}}
					</label>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import gql from 'graphql-tag'

	const TODOS_QUERY = gql`
		query {
			todos {
				id
				what
				done
			}
		}`

	const TODO_CREATE = gql`
		mutation todoCreate($what: String!) {
			todoCreate(what: $what) {
				id
			}
		}`

	const TODO_UPDATE = gql`
		mutation todoUpdate($id: ID!, $what: String, $done: Boolean) {
			todoUpdate(id: $id, what: $what, done: $done) {
				id
				what
				done
			}
		}`

	const TODO_DELETE_ALL = gql`
		mutation todoDeleteAll {
			todoDeleteAll
		}`

	export default {
		components: {
		},
		apollo: {
			todos: {
				query: TODOS_QUERY,
				loadingKey: 'loading',
			}
		},
		computed: {
			todo() {
				return this.todos.filter(item => {
					return !item.done && this.searchFilter(item.what)
				})
			},
			done() {
				return this.todos.filter(item => {
					return item.done && this.searchFilter(item.what)
				})
			},
		},
		data() {
			return {
				loading: 0,
				error: null,
				todos: [],
				what: '',
				search: '',
			}
		},
		methods: {
			searchFilter(what) {
				return (!this.search || what.toLowerCase().indexOf(this.search.toLowerCase()) !== - 1)
			},
			async add() {
				const what = this.what
				await this.$apollo.mutate({
					mutation: TODO_CREATE,
					variables: { what },
					update: (store, { data: { todoCreate } }) => {
						if (!todoCreate) return
						// Read the data from our cache for this query.
						const data = store.readQuery({
							query: TODOS_QUERY,
						})
						
						const newTodo = {
							__typename: "Todo",
							id: todoCreate.id,
							what,
							done: false,
						}
						data.todos.push(newTodo)

						// Write our data back to the cache.
						store.writeQuery({
							query: TODOS_QUERY,
							data
						})
					},
				})
				this.what = ''
			},
			async update(id, done = false, what) {
				await this.$apollo.mutate({
					mutation: TODO_UPDATE,
					variables: { id, what, done },
				})
			},
			todoClicked(item) {
				this.update(item.id, !item.done)
			},
			async deleteAll() {
				await this.$apollo.mutate({
					mutation: TODO_DELETE_ALL,
					update: (store, { data: { todoDeleteAll } }) => {
						if (!todoDeleteAll) return
						store.writeQuery({
							query: TODOS_QUERY,
							data: { todos: [] }
						})
					},
				})
			}
		},
	}
</script>

<style>
	.container {
		max-width: 800px;
		margin: 100px auto;
		position: relative;
		background: #ededed;
		padding: 15px;
	}
	.header-title {
		text-align: left;
	}
	.delete-all-btn {
		cursor: pointer;
		color: blue;
		text-decoration: underline;
		position: absolute;
		top: 15px;
		right: 15px;
	}

	.flex-container {
		padding-bottom: 10px;
		display: flex;
		justify-content: space-between;
	}

	.filter-input {
		width: 150px !important;
	}

	.todo-list {
		width: 50%;
	}
	.todo-item {
		display: block;
		width: 100%;
		text-align: left;
		padding: 5px 10px;
		cursor: pointer;
		word-wrap: break-word;
	}
	.border-r {
		border-right: 1px solid #ccc;
	}

</style>
