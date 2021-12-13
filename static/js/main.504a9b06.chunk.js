(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),s=n.n(r),o=(n(15),n(2)),i=n(9),l=n(3),u=n(4),d=n(6),m=n(5),h=n(10),b=(n(16),n(0)),j=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(o.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.addNewContact({name:t.state.name,number:t.state.number,id:Object(h.a)(10)}),t.reset()},t.reset=function(){return t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("form",{onSubmit:this.handleSubmit,className:"ContactForm",children:[Object(b.jsxs)("div",{className:"ContactForm__div",children:[Object(b.jsxs)("label",{className:"ContactForm__form__label",htmlFor:"text",children:["Contact"," "]}),Object(b.jsx)("input",{className:"ContactForm__form__input",label:"last",type:"text",name:"name",id:"text",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"ContactForm__div",children:[Object(b.jsxs)("label",{className:"ContactForm__form__label",htmlFor:"tel",children:["Phone Number"," "]}),Object(b.jsx)("input",{className:"ContactForm__form__input",type:"tel",name:"number",id:"tel",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:this.handleChange})]}),Object(b.jsx)("button",{className:"ContactForm__form__btn",type:"submit",children:"Add contact"})]})}}]),n}(a.Component),f=j;var p=function(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"filter",children:"Filter "}),Object(b.jsx)("input",{type:"text",name:"filter",id:"filter",value:t.filter,onChange:t.handleChange})]})};n(18);var C=function(t){return Object(b.jsxs)("li",{className:"ContactListItem",children:[Object(b.jsxs)("p",{className:"ContactListItem__Name",children:["Name: ",t.contact.name]}),Object(b.jsxs)("p",{className:"ContactListItem__Name",children:["Number: ",t.contact.number]}),Object(b.jsx)("button",{className:"ContactListItem__btn",type:"button",onClick:function(){return t.handleDelete(t.contact.id)},children:"Delete contact"})]})};n(19);var O=function(t){var e=t.filterContacts,n=t.handleDelete;return Object(b.jsx)("ul",{className:"ContactList",children:e.map((function(t){return Object(b.jsx)(C,{contact:t,handleDelete:n},t.id)}))})},x=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addNewContact=function(e){if(t.state.contacts.some((function(t){return t.name===e.name})))return alert("".concat(e.name," is already in contacts"));t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[e])}}))},t.handleChange=function(e){t.setState(Object(o.a)({},e.target.name,e.target.value))},t.handleDelete=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.getFilterContacts=function(){return t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=function(t){try{return JSON.parse(localStorage.getItem(t))}catch(e){return null}}("contacts");this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(n){return null}}("contacts",this.state.contacts)}},{key:"render",value:function(){var t=this.getFilterContacts();return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(f,{addNewContact:this.addNewContact}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(p,{filter:this.state.filter,handleChange:this.handleChange})]}),t.length>0&&Object(b.jsx)(O,{filterContacts:t,handleDelete:this.handleDelete})]})}}]),n}(c.a.Component),v=x;var _=function(){return Object(b.jsx)(v,{})};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.504a9b06.chunk.js.map