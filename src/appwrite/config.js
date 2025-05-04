import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {

    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
        // Also called as Bucket
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {

        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error ", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}) {
        // Slug is first argument need to identify
        // UserId not need, only user can update

        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: error ", error);
        }
    }

    async deletePost(slug) {
        
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            ) // If return then give that post
            return true; // It can be handle better even if false.

        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error ", error);
            return false;
        }
    }

    async getPost(slug) {
        // To get one post
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite Service :: getPost :: error ", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        // Get only posts with status 'Actice'
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                // 25, // for Paginations
            )
        } catch (error) {
            console.log("Appwrite Service :: getPosts :: error ", error);
            return false;
        }
    }

    // file upload service
    // not just name, give blob
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error ", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        // FileId fro uploadFile and goes with Feature Image
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: error ", error);
            return false;
        }
    }

    // This is not Promise give fast response
    async getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service();
export default service;