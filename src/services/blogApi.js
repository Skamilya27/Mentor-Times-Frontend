import axios from "axios";
import baseUrl from "../conf";

export class BlogService {
    async getAll() {
        try {
            const response = await axios.get(baseUrl);
            return response.data;
        } catch (error) {
            console.error('Error fetching blogs:', error);
            throw error.response?.data || 'Failed to fetch blogs';
        }
    }

    async getById(blogId) {
        try {
            const response = await axios.get(`${baseUrl}/${blogId}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching blog ${blogId}:`, error);
            throw error.response?.data || 'Failed to fetch blog';
        }
    }

    async create(blogData) {
        try {
            const response = await axios.post(baseUrl, blogData);
            return response.data;
        } catch (error) {
            console.error('Error creating blog:', error);
            throw error.response?.data || 'Failed to create blog';
        }
    }

    async update(blogId, blogData) {
        try {
            const response = await axios.put(`${baseUrl}/${blogId}`, blogData);
            return response.data;
        } catch (error) {
            console.error(`Error updating blog ${blogId}:`, error);
            throw error.response?.data || 'Failed to update blog';
        }
    }

    async delete(blogId) {
        try {
            const response = await axios.delete(`${baseUrl}/${blogId}`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting blog ${blogId}:`, error);
            throw error.response?.data || 'Failed to delete blog';
        }
    }
}

const blogService = new BlogService();
export default blogService;