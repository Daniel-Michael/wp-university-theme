class MyNotes {
  // 1. describe and create/initiate our object
  constructor() {
    this.events();
    alert('stuff')
  }

}
  // 2. events
events() {

  $(".delete-note").on("click", this.deleteNote);
  }
// 3. Methods here
  deleteNote() {
      $.ajax({
      url: universityData.root_url +'/wp-json/wp/v2/note/91',
      type: 'DELETE',
      success: (response)=>{
        console.log("congrats");
        console.log)("response");
      },
      error: (response) => {
        console.log("congrats");
        console.log("response");
      }
    });
}

var notes = new MyNotes();
