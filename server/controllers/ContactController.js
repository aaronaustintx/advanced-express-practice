import contacts from "../contacts";


export function listAll(request, response) {
    return response.json(contacts);
}
export function show(request, response) {
    return response.json({theId: request.params.id});
}
export function create(request, response){
    return response.json({});
}
export function update(request, response) {
    return response.json({theId: request.params.id});
}
export function remove(request, response) {
    return response.json({});
}