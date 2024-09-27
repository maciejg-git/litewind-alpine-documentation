document.addEventListener('alpine:init', () => {
  Alpine.store('tableDefinition', {
    data: [
      {"id":1,"first_name":"Anthony","last_name":"Linbohm","city":"Makui","department":"Business Development","title":"Quality Engineer"},
      {"id":2,"first_name":"Richard","last_name":"Moult","city":"Xihu","department":"Legal","title":"Budget/Accounting Analyst IV"},
      {"id":3,"first_name":"Chance","last_name":"Dallas","city":"Moncton","department":"Support","title":"Product Engineer"},
      {"id":4,"first_name":"Rozamond","last_name":"Abbatucci","city":"Chico","department":"Legal","title":"Software Consultant"},
      {"id":5,"first_name":"Ashely","last_name":"Petrozzi","city":"Lafia","department":"Services","title":"Staff Accountant III"},
      {"id":6,"first_name":"Bron","last_name":"Siuda","city":"Mora","department":"Accounting","title":"Marketing Manager"},
      {"id":7,"first_name":"Marena","last_name":"Geraldi","city":"Karanganyar","department":"Support","title":"Compensation Analyst"},
      {"id":8,"first_name":"Tomas","last_name":"Donneely","city":"Meirinhas","department":"Services","title":"Research Associate"},
      {"id":9,"first_name":"Umberto","last_name":"Cohalan","city":"Cuamba","department":"Research and Development","title":"Chemical Engineer"},
      {"id":10,"first_name":"Nicola","last_name":"Flippelli","city":"Faqīrwāli","department":"Human Resources","title":"VP Quality Control"},
    ],
    primaryKey: 'id',
    definition: [
      {
        key: 'status',
        label: 'Status',
      },
      {
        key: 'first_name',
        label: 'First name',
        sortable: true,
      },
      {
        key: 'last_name',
        label: 'Last name',
        sortable: true,
      },
      {
        key: 'title',
        sortable: true,
      },
      {
        key: 'department',
        sortable: true,
      },
      {
        key: 'edit',
        label: 'Edit',
      }
    ]
  })
})
