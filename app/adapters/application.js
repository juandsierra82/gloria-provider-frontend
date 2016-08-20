import Ember from 'ember';
import DS from "ember-data";
import ENV from '../config/environment';

if (ENV.environment === 'development') {
  var host='http://localhost:3000';
}

// Every AJAX call made after this will have its default values overriden with those included in here.  DANGEROUS - Can mess with plugins, use sparingly.
$.ajaxSetup({
  xhrFields: {
    withCredentials: true
  },
  // These two functions create a loading bar for Ajax calls similar to Googles that shows at the bottom of the header section.
  beforeSend:function(){
  //  var printProgress=0;
  //  Ember.interval=setInterval(function(){
    //  if(printProgress!==99){
    //    printProgress=printProgress+1;
    //  }
    //  $(".top-loading").css("width",printProgress+"%");
    //},25);
  },
  complete:function(){
    clearInterval(Ember.interval);
    $(".top-loading").css("width","0%");
  }
});

export default DS.JSONAPIAdapter.extend({
    headers: {
    "X-CSRF-Token": $('meta[name="csrf-token"]').attr('content')
  },
  host: host,
  namespace: 'api/gloria_provider_network',
  async:true,
  ajax: function(url, method, hash) {
    hash = hash || {};
    hash.crossDomain = true;
    hash.xhrFields = {withCredentials: true};
    return this._super(url, method, hash);
  }
});
