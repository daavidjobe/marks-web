

let patterns = {
    passwordRegex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    urlRegex: /^((http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))$/
}

export let validatePassword = password => {
     return patterns.passwordRegex.test(password);
}

export let validateEmail = email => {
    return patterns.emailRegex.test(email);
}

export let validateCategory = categoryName => {
        if(categoryName.length < 2) {
            return {valid: false, message: 'to short'}
		} else if(categoryName.length > 30) {
			return {valid: false, message: 'to long'}
		} else {
			return {valid: true, message: ''}
		}
}

export let validateUrl = url => {
    return patterns.urlRegex.test(url);
}