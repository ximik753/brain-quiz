export const build = (id, payload) => JSON.stringify({ id, payload })

export const parse = (data) => JSON.parse(data)
