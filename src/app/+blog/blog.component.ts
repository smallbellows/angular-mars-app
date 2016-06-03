import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/common';
import { IBlogPost } from '../shared/models';
import { BlogPostService } from '../shared/services';
import { StripHTMLTags } from './blog.pipe';

@Component({
  moduleId: module.id,
  selector: 'app-blog',
  templateUrl: 'blog.component.html',
  styleUrls: ['blog.component.css'],
  providers: [BlogPostService],
  pipes: [StripHTMLTags]
})
export class BlogComponent implements OnInit {
  
  public blogPosts: IBlogPost[];

  constructor(
    private blogPostService: BlogPostService
  ) {}

  ngOnInit() {
    this.blogPostService.getBlogPosts().then( (result) => {
      this.blogPosts = result;
      
      this.blogPosts.map( (post)=>{
        
       post.title = post.title.rendered;
       post.excerpt = post.excerpt.rendered;
       
      });
    });
  }

}
