
enyo.kind(
  /** */ {
    
  /** */
  name: "XT.LoginScreen",
  
  /** */
  kind: "XT.ScreenCarousel",
  
  /** */
  classes: "login-screen",
  
  /** */
  //arrangerKind: "CardSlideInArranger",
  
  /** */
  carouselEvents: {
    
    /** */
    multipleSessions: "sessionSelection"
  },
  
  /** */
  components: [
    { name: "userLogin", kind: "XT.UserLoginScreen" },
    { name: "sessionSelection", kind: "XT.SessionSelectionScreen" }
  ],
  
  /** */
  create: function() {
    this.inherited(arguments);
    
    // temporary
    this.$.userLogin.$.block.$.username.setValue("admin");
    this.$.userLogin.$.block.$.password.setValue("Assemble!Aurora");
    this.$.userLogin.$.block.$.organization.setValue("aurora");
  }
    
});