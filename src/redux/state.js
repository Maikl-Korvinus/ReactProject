let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 12, },
            { id: 2, message: "It's my first post", likesCount: 11, },
            { id: 2, message: "Bla bla", likesCount: 13, },
            { id: 2, message: "DdDa", likesCount: 15, },
         ],
         newPostText: 'hard work for better future',
      },
      dialogsPage: {
         message: [
            { id: 1, message: "Hi", },
            { id: 2, message: "Whats up", },
            { id: 3, message: "Yo", },
            { id: 4, message: "Yo", },
            { id: 5, message: "Yo", },
         ],
         dialogs: [
            { id: 1, name: "Maikle", },
            { id: 2, name: "Trofim", },
            { id: 3, name: "Polya", },
            { id: 4, name: "Ilui", },
            { id: 5, name: "Sanya", },
         ],
      }
   },
   getState() {
      return this._state;
   },
   _callSubscriber() {
      console.log('State changed');
   },
   addPost() {
      let newPost = {
         id: 5,
         message: this._state.profilePage.newPostText,
         likesCount: 0,
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
   },
   updateNewPostText(newText) {

      this._state.profilePage.newPostText = newText;
      this._callSubscriber(this._state);
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },


}

export default store;
window.store = store;