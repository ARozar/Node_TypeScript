
var _serverRoot = '';

export function setRootPath(serverRoot: string){
    _serverRoot = serverRoot;
}

export function getServerRoot(): string{
    return _serverRoot;
}