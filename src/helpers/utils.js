export function getApiHost() {
    return 'http://localhost:8888/';
}

export function getSpaHost() {    
    return 'http://localhost:8080/';
}

export function getCss() {    
    return `${getSpaHost()}src/styles/myapp.css`;
}