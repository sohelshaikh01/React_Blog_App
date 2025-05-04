import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {

    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }   // When the someone create an object then the client should be created

    // Creating wrapper of services to work with any backend
    async createAccount({email, password, name}) {
        
        // There must be first unique id
        const userAccount = await this.account.create(ID.unique(), email, password, name);

        if (userAccount) {
            return this.login({email, password}); 
            // call another method to direct login on account creation
            // return and manage in frontend
        } else {
            return userAccount;
        }
    }
    
    async login({email, password}) {
      
        return await this.account.createEmailPasswordSession(email, password);
    }
   
    async getCurrentUser() {

        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error ", error);
        }
        return null;
    }

    async logout() {

        // Delete all sessions of user from any browser
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService;

