import "./App.css";

function App() {
	return (
			<div class="wrapper">
				<header>Todo App</header>
				<div class="inputField">
					<input type="text" placeholder="Add your new todo" />
					<button>Add</button>
				</div>
				<ul class="todoList"></ul>
				<div class="footer">
					<span>
						You have <span class="pendingTasks"></span> pending
						tasks
					</span>
					<button>Clear All</button>
				</div>
			</div>
	);
}

export default App;
