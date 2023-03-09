/*
 use a JavaScript class in order to create a direct binding to an HTML element. 

In this video we define a JavaScript class that has the appropriate instance properties and methods to directly manipulate a standard HTML list (UL or OL). We create the HTML element, give it an ID and then simply pass it into the constructor for our custom designed class. From there we can add and remove entries (list items) to and from the list.

This can be very useful when developing custom user interfaces for your next web project as it allows you to seamlessly integrate with the UI from the application logic
*/


class ListBinding{
    constructor(element){
        this.listElement = element;
        this.textList = [];
    }
    // makes an <li>text</li>element/tags
    static createListItem(txt){
        const li = document.createElement("li");
        li.textContent = txt
        return li
    }
    // updating the list item(<ul>)
    update(){
        //remove all existing<li>element/tags
        while(this.listElement.firstChild){
            this.listElement.removeChild(this.listElement.firstChild)
        }
        // Fill <ul>/<ol> tag with <li>

    for (const text of this.textList) {
        this.listElement.appendChild(ListBinding.createListItem(text))
    }
    };
    // create add and remove method for list item
add(text){
    this.textList.push(text)
    this.update()
}
remove(index){
    this.textList.splice(index,1);
    this.update()
}
}