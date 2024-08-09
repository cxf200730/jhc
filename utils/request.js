// 请求拦截器
uniCloud.addInterceptor('databaseForJQL', {
	//拦截前触发
	invoke(param) {
		// param为拦截Api的参数 例 {name: 'functionName', data: {'functionParam1': 1, 'functionParam2': 2}}
		// 此处返回错误可终止api执行
	},
	success(res) {
		// res为callFunction的返回值，此处可以对返回值进行修改
		//正常返回
		if (res.result.errCode === 0) {
			const result = res.result.data
			res.result = result
		}
	},
	fail(err) {
		// err为callFunction抛出的错误
	},
	complete(res) {
		// complete内res为上面的res或err
	},
})