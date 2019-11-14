import { Post } from '../models/Post.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class PostService {
  
  postsSubject = new Subject<any[]>();
  private posts: Post[] = [];
  
  constructor(private httpClient: HttpClient) { 
    this.getPostsFromServer();
    //this.getPosts();
  }
  
  ngOnInit() {}

  emitPostsSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  addPost(post: Post) {
    /*
    this.posts.push(post);
    this.emitPostsSubject();
    //*/
    this.posts.push(post);
    this.savePostsToServer();
    //this.savePosts();
    this.emitPostsSubject();
  }

  // son equivalent
  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPostsSubject();
  }

  deletePost(index : number){
    /*
    this.posts =  this.posts.filter((elt , i)=>index!=i);
    this.emitPostsSubject();
    //*/
    /*
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === this.posts[index]) {
          return true;
        }
      }
    );
    //*/
    this.posts =  this.posts.filter((elt , i)=>index!=i);
    //this.posts.splice(postIndexToRemove, 1);
    this.savePostsToServer();
    //this.savePosts();
    this.emitPostsSubject();
  }

  // son equivalent
  removePost(post: Post) {
    // suppression du post proprement dit
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPostsSubject();
  }

  // Pour enregistrer le changement du nombre de loveIts dans le service
  updateLoveItsPost(index : number, increment : number){
    // increment est dans l'ensemble {-1, 1}
    //*
    this.posts[index].loveIts += increment;
    this.savePostsToServer();
    //this.savePosts();
    this.emitPostsSubject();
    //*/
    /*
    var post_mod = new Post();
    this.getSinglePost(+index).then(
      (post: Post) => {
        post_mod = post;
      }
    );
    post_mod.loveIts += increment;
    //*/
  }

  // Communication avec le serveur Firebase
  savePostsToServer() {
    this.httpClient
      .put('https://simulateurangular.firebaseio.com/posts.json', this.posts)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  // son equivalent
  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }
  
  getPostsFromServer() {
    this.httpClient
      .get<any[]>('https://simulateurangular.firebaseio.com/posts.json')
      .subscribe(
        (response) => {
          this.posts = response;
          this.emitPostsSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  // son equivalent
  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPostsSubject();
        }
      );
  }
 
  
  /*
  La fonction getSinglePost() récupère un post selon son index, qui est simplement ici son index dans 
  l'array enregistré.  Vous utilisez  once(), qui ne fait qu'une seule requête de données. Du coup, 
  elle ne prend pas une fonction callback en argument mais retourne une Promise, permettant 
  l'utilisation de  .then()  pour retourner les données reçues.
  */
  getSinglePost(index: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/posts/' + index).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }
}