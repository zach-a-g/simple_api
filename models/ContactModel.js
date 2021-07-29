`use strict`;

const db = require('./conn');

class ContactModel {
    constructor(id, name, slug, year) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM contact;`)
            return response;
        } catch (error) {
            console.log('Error: ', error);
            return error;
        }
    }

    static async getBySlug(slug) {
        try {
            const response = await db.one(
                `SELECT * FROM contact WHERE slug = '${slug}';`
            );
            console.log("RESPONSE FROM GET BY SLUG: ", response);
            return response;
        } catch (error) {
            console.error('ERROR: ', error);
            return error;
        }
    }
};

module.exports = ContactModel;