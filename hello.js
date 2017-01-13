var app2 = new Vue({
	el: '#app-2',
	data: {
		message: 'You loaded this page on ' + new Date()
	}
})

var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
})

var app4 = new Vue({
	el: '#app-4',
	data: {
		todos: [{
			text: 'Learn JavaScript'
		}, {
			text: 'Learn Vue'
		}, {
			text: 'Build something awesome'
		}]
	}
})

var app5 = new Vue({
	el: '#app-5',
	data: {
		message: 'Fuck You!'
	},
	methods: {
		reverseMessage: function () {
			this.message = this.message.split('').reverse().join('')
		}
	}
})

var app6 = new Vue({
	el: '#app-6',
	data: {
		message: 'Nvidia'
	}
})

Vue.component('todo-item', {
	// 'todo-item'标签名，通过 props 与父元素解耦
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
	el: '#app-7',
	data: {
		todos: [{
			text: 'Learn JavaScript'
		}, {
			text: 'Learn Vue'
		}, {
			text: 'Build something awesome'
		}]
	}
})

var vm = new Vue({
	el: '#app-8',
	data: {
		message: 'Hello'
	},
	computed: {
		// a computed getter
		reversedMessage: function () {
			// `this` points to the vm instance
			return this.message.split('').reverse().join('')
		}
	}
})

var vm = new Vue({
	el: '#app-9',
	data: {
		firstName: 'Foo',
		lastName: 'Bar'
	},
	computed: {
		fullName: {
			get: function () {
				return this.firstName + ' ' + this.lastName
			},
			set: function (newValue) {
				var names = newValue.split(' ')
				this.firstName = names[0]
				this.lastName = names[names.length - 1]
			}
		}
	}
})

var watchExampleVM = new Vue({
	el: '#watch-example',
	data: {
		question: '',
		answer: 'I cannot give you an answer until you ask a question!'
	},
	watch: {
		// 如果 question 发生改变，这个函数就会运行
		question: function (newQuestion) {
			this.answer = 'Waiting for you to stop typing...'
			this.getAnswer()
		}
	},
	methods: {
		// _.debounce 是一个通过 lodash 限制操作频率的函数。
		// 在这个例子中，我们希望限制访问yesno.wtf/api的频率
		// ajax请求直到用户输入完毕才会发出
		// 学习更多关于 _.debounce function (and its cousin
		// _.throttle), 参考: https://lodash.com/docs#debounce
		getAnswer: _.debounce(
			function () {
				var vm = this
				if (this.question.indexOf('?') === -1) {
					vm.answer = 'Questions usually contain a question mark. ;-)'
					return
				}
				vm.answer = 'Thinking...'
				axios.get('https://yesno.wtf/api')
					.then(function (response) {
						vm.answer = _.capitalize(response.data.answer)
					})
					.catch(function (error) {
						vm.answer = 'Error! Could not reach the API. ' + error
					})
			},
			// 这是我们为用户停止输入等待的毫秒数
			500
		)
	}
})
