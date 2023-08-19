import { error } from '@sveltejs/kit';

export async function load({params}) {

    let paramsJSON = JSON.parse(JSON.stringify(params))

    console.log(paramsJSON)

    console.log(params)

    try {
    const category = params.category;

    return {
        category
    };

    } catch (e) {
        throw error(404, `Could not find category ${params.category}`)
    }
}