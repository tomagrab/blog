import { error } from '@sveltejs/kit';

export async function load({params}) {

    try {
    const category = params.category;

    return {
        category
    };

    } catch (e) {
        throw error(404, `Could not find category ${params.category}`)
    }
}