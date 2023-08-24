import faker from 'faker';
import {certifications, countries, genres, roles} from "./constants";

function generateTitle() {
    return {
        id: faker.datatype.uuid(),
        title: faker.random.words(3),
        description: faker.lorem.sentences(2),
        release_year: faker.date.past(50).getFullYear(),
        age_certification: faker.random.arrayElement(certifications),
        runtime: faker.datatype.number({ min: 60, max: 180 }),
        genres: faker.random.arrayElements(genres, faker.datatype.number({ min: 1, max: 3 })),
        production_country: faker.random.arrayElement(countries),
        seasons: faker.datatype.boolean() ? faker.datatype.number({ min: 1, max: 8 }) : null,
    };
}

function generateCredit(titleId) {
    return {
        id: faker.datatype.uuid(),
        title_id: titleId,
        real_name: faker.name.findName(),
        character_name: faker.name.firstName(),
        role: faker.random.arrayElement(roles),
    };
}

// Generate datasets of titles and credits
export function generateDatasets() {
    const titles = Array.from({ length: 100 }, generateTitle);
    const credits = titles.flatMap(title => Array.from({ length: 5 }, () => generateCredit(title.id)));

    return { titles, credits };
}
