import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { IBlogPost } from '../models';

@Injectable()
export class BlogPostService {
    
    blogUrl = 'http://fourth.academy.red/wp-json/wp/v2/posts';
    
    constructor(private http: Http ) {}
    
    getBlogPosts(): Promise<IBlogPost[]> {
        
        return this.http.get(this.blogUrl)
                        .toPromise()
                        .then( response => response.json() )
                        .catch( this.handleError );
    }
    
    private handleError(error: any) {
        console.log('There was an error', error);
        return Promise.reject(error.message || error);
    }
}

