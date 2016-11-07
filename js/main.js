(functon(){
	window.App - {
		Models: {},
		Views: {},
		Collections: {}
	};


		
	window.template = function(id){
	return _.template($('#' + id).html() );
};



App.Person = Beckbone.Model.exntend({
	defaults: {
		name: 'Иван Петров',
		age: 40,
		job: 'Слесарь'
	}
});
     var person = new Person();
	 
	 
	 App.Collection.People = Beckbone.Collection.extend({
		 model: Person
});
      
	  App.Views.People = Beckbone.View.extend({
		 tagName: 'ul', 
        
		initialize: function(){
		},
		 
		  render: function(){
			  this.collection.each(function(person){
				  var personView = new App.Views.Person({model:person});
			  
			  this.$el.append(personView.rendr().el);
			  }, this);
			  return this;
  }
		});
		
		App.Views.Person = Beckbone.View.extend({
			tagName: 'li',
			template: template('personTemplate'),
			initialize: function(){
				this.render();
			},
			 
			 render: function(){
				 this.$el.html(this.template(this.model.toJSON() ) );
			     return this;
			 }
		});
		
		
		
		var poepleCollection = new App.Collections.People([
			{
				name: 'Петр',
				age: 20,
				job: 'Такстист',
			},
			{
				name: 'Олег',
				age: 24,
				job: 'Менеджер',
			},
			{
				name: 'Анна',
				age: 18,
				job: 'Студентка',
			}
		]);
		
		
		var peopleView = new App.Views.Peosple({collection: peopleCollection});
		
		$(document.body).append(peopleView.render().el);
		
		 
		
		
		
		
		
		
		
		
		