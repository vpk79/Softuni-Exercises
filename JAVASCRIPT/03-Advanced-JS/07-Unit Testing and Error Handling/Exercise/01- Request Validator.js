function requestValidator(request) {

    const { method, uri, version, message } = request;

    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']

    let uriPattern = /^([\w.])+$|^\*$/
    let msgPattern = /^[^<>\\&\'\"]+$/

    const errorMsg = (typeOfError) => {throw new Error(`Invalid request header: Invalid ${typeOfError}`)}

    if (!method || !validMethods.includes(method)) errorMsg('Method');
    if (!uri || !uri.match(uriPattern)) errorMsg('URI');
    if (!version || !validVersion.includes(version)) errorMsg('Version');
    if (message === undefined || (!message.match(msgPattern) && message !== '')) errorMsg('Message');
    return request;
}




console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}))



