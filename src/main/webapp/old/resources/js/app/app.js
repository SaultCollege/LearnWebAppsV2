/* 
 * http://www.cs.columbia.edu/~lennox/3101-03/pseudo-object.html
 * http://www.programming9.com/programs/java/306-design-a-vehicle-class-hierarchy-in-java-to-demonstrate-polymorphism
 */
/* create a Vehicle object using a constructor function*/
function Vehicle(uuid, make, model, year, image, vin) {
    this.uuid = uuid;
    this.make = make;
    this.model = model;
    this.year = year;
    this.image = image;
    this.vin = vin;
    // we want to override toString but we cant do it here.  We want to add it to the 
    // .prototype property because thats where all inherited members live
    // we add toString below
}
;
// override toString() in the protitype because thats where inherited members live
// Note** use 'this' to access properties
Vehicle.prototype.toString = function () {
    return this.make + ', ' + this.model + ', ' + this.year;
};


Vehicle.prototype.getDialogInputs = function () {
    var container = document.createElement('DIV');
    var divImageRow = document.createElement('DIV');
    var divImageCol1 = document.createElement('DIV');
    var divImageCol2 = document.createElement('DIV');
    var divMakeRow = document.createElement('DIV');
    var divMakeCol1 = document.createElement('DIV');
    var divMakeCol2 = document.createElement('DIV');
    var divModelRow = document.createElement('DIV');
    var divModelCol1 = document.createElement('DIV');
    var divModelCol2 = document.createElement('DIV');
    var divYearRow = document.createElement('DIV');
    var divYearCol1 = document.createElement('DIV');
    var divYearCol2 = document.createElement('DIV');
    var form = document.createElement('FORM');
    var inputImage = document.createElement('INPUT');
    var inputMake = document.createElement('INPUT');
    var inputModel = document.createElement('INPUT');
    var inputYear = document.createElement('INPUT');
    divImageRow.setAttribute('class', 'row');
    divImageCol1.setAttribute('class', 'col-2');
    divImageCol1.innerHTML = 'Image';
    divImageCol2.setAttribute('class', 'col-4 image');
    inputImage.setAttribute('type', 'file');
    inputImage.style.width = '100%';
    form.appendChild(inputImage);
    divImageCol2.appendChild(form);

    divImageRow.appendChild(divImageCol1);
    divImageRow.appendChild(divImageCol2);


    inputImage.innerHTML = this.image;
    inputMake.value = (this.make === undefined) ? '' : this.make;
    inputModel.value = (this.model === undefined) ? '' : this.model;
    inputYear.value = (this.year === undefined) ? '' : this.year;

    divMakeRow.setAttribute('class', 'row');
    divMakeCol1.setAttribute('class', 'col-2');
    divMakeCol2.setAttribute('class', 'col-4 make');
    divMakeCol1.innerHTML = 'Make';
    inputMake.style.width = '100%';
    divMakeCol2.appendChild(inputMake);

    divMakeRow.appendChild(divMakeCol1);
    divMakeRow.appendChild(divMakeCol2);


    divModelRow.setAttribute('class', 'row');
    divModelCol1.setAttribute('class', 'col-2');
    divModelCol2.setAttribute('class', 'col-4 model');
    divModelCol1.innerHTML = 'Model';
    inputModel.style.width = '100%';
    divModelCol2.appendChild(inputModel);

    divModelRow.appendChild(divModelCol1);
    divModelRow.appendChild(divModelCol2);


    divYearRow.setAttribute('class', 'row');
    divYearCol1.setAttribute('class', 'col-2');
    divYearCol2.setAttribute('class', 'col-4 year');
    divYearCol1.innerHTML = 'Year';
    inputYear.style.width = '100%';
    divYearCol2.appendChild(inputYear);

    divYearRow.appendChild(divYearCol1);
    divYearRow.appendChild(divYearCol2);

    container.appendChild(divImageRow);
    container.appendChild(divMakeRow);
    container.appendChild(divModelRow);
    container.appendChild(divYearRow);

    return container;
};

Vehicle.prototype.getView = function () {
    var divRow = document.createElement('DIV');
    var divImage = document.createElement('DIV');
    var divMake = document.createElement('DIV');
    var divModel = document.createElement('DIV');
    var divYear = document.createElement('DIV');
    var divSelect = document.createElement('DIV');
    divRow.setAttribute('id', this.uuid);
    divRow.setAttribute('class', "row");
    divImage.setAttribute('class', "col-2 image");
    divMake.setAttribute('class', "col-1 make");
    divModel.setAttribute('class', "col-1 model");
    divYear.setAttribute('class', "col-1 year");
    divSelect.setAttribute('class', "col-1 checkbox");
    divMake.innerHTML = this.make; //"make";
    divModel.innerHTML = this.model; //"model";
    divYear.innerHTML = this.year; //"year";
    var img = document.createElement('IMG');
    img.src = '../resources/images/app/' + this.image;
    img.width = 300;
    divImage.appendChild(img);
    divRow.appendChild(divImage);
    divRow.appendChild(divMake);
    divRow.appendChild(divModel);
    divRow.appendChild(divYear);
    var checkbox = document.createElement('INPUT');
    checkbox.setAttribute('type', 'checkbox');
    // https://www.w3schools.com/icons/google_icons_editor.asp
    //<i class="material-icons" style="font-size:36px">mode_edit</i>
    var editIcon = document.createElement('I');
    editIcon.setAttribute('class', 'material-icons');
    editIcon.setAttribute('onClick', 'edit(\'' + this.uuid + '\' )');
    editIcon.innerHTML = 'mode_edit';
    divSelect.appendChild(checkbox);
    divSelect.appendChild(editIcon);
    divRow.appendChild(divSelect);
    return divRow;

};
