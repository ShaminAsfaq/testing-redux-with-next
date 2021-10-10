import { articles } from '../../../data';

export default function handler({ query: {id} } = {query}, res) {
    const filteredList = articles.filter(each => each.id === id);

    if (filteredList.length > 0) {
        res.status(200).json(filteredList[0]);
    } else {
        res.status(404).json({message: `Article with Id ${id} not found`});
    }
}

