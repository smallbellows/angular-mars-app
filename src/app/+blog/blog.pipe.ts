import { Pipe, PipeTransform } from '@angular/core';

// Strips HTML tags from blog posts

@Pipe({name: 'stripTags' })
export class StripHTMLTags implements PipeTransform {
    transform(post: string): string {
        
        post = post.replace(/<(?:.|)*?>/gm, '');
        post = post.replace('[&hellip;]', '[...]');
        post = post.replace('&#8217;', "'");
        
        return post;
    }
}