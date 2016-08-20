import DS from 'ember-data';

export default DS.Model.extend({
  providerName: DS.attr(),
  providerPhone: DS.attr(),
  providerEmail: DS.attr(),
  cprCompletionDate: DS.attr(),
  cprExpirationDate: DS.attr()
});
