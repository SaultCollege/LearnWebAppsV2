/* 
 */
function Person(uuid, firstname, lastname, image) {
    this.uuid = uuid;
    this.firstname = firstname;
    this.lastname = lastname;
    this.image = image;

    // setters and getters http://stackoverflow.com/questions/5222209/getter-setter-in-constructor
    Object.defineProperties(this, {
        "fullname": {
            "get": function () {
                return firstname + ' ' + lastname;
            },
            "set": function () {
                firstname = 'xxx';
            }
        }
    });

    this.toString = function () {
        return this.uuid+'--> '+this.firstname + ', ' + this.lastname + ', ' + this.image;
    };

    this.update = function (id) {
        // populate the properties with the values entered in the input elements contained in the element with id, 'id'
        var fields = document.getElementById(id).getElementsByTagName('input');
        var img = fields[0].value;
        // image uses the \ file separator and will be of the form c:\fakepath\filename.type in windows
        // image will have / file separator if in linux
        // so, convert all \ to /, then split along / then get last element
        // replace all \ with /
        var ss = img.replace(/\\/g, "/");
        // split
        var s = ss.split("/");
        //console.log('img-->'+img);
        //console.log('image-->'+this.image);
        // update image only if it was changed
        if(! (img === '' || img === undefined) )
            this.image = s[s.length - 1];
//        alert(image);

        this.firstname = fields[1].value;
        this.lastname = fields[2].value;
        return this;
    };

    this.getDialogInputs = function () {
        var container = document.createElement('DIV');
        var divImageRow = document.createElement('DIV');
        var divImageCol1 = document.createElement('DIV');
        var divImageCol2 = document.createElement('DIV');
        var divFirstnameRow = document.createElement('DIV');
        var divFirstnameCol1 = document.createElement('DIV');
        var divFirstnameCol2 = document.createElement('DIV');
        var divLastnameRow = document.createElement('DIV');
        var divLastnameCol1 = document.createElement('DIV');
        var divLastnameCol2 = document.createElement('DIV');
        var form = document.createElement('FORM');
        var inputImage = document.createElement('INPUT');
        var inputFirstname = document.createElement('INPUT');
        var inputLastname = document.createElement('INPUT');
        divImageRow.setAttribute('class', 'grid');
        divImageCol1.setAttribute('class', 'col-4');
        divImageCol1.innerHTML = 'Image';
        divImageCol2.setAttribute('class', 'col-8 image');
        inputImage.setAttribute('type', 'file');
        inputImage.style.width = '100%';
        form.appendChild(inputImage);
        divImageCol2.appendChild(form);

        divImageRow.appendChild(divImageCol1);
        divImageRow.appendChild(divImageCol2);


//        inputImage.innerHTML = this.image;
//        inputImage.value = this.image;

        inputFirstname.value = (this.firstname === undefined) ? '' : this.firstname;
        inputLastname.value = (this.lastname === undefined) ? '' : this.lastname;

        divFirstnameRow.setAttribute('class', 'grid');
        divFirstnameCol1.setAttribute('class', 'col-4');
        divFirstnameCol2.setAttribute('class', 'col-8 firstname');
        divFirstnameCol1.innerHTML = 'Firstname:';
        inputFirstname.style.width = '100%';
        divFirstnameCol2.appendChild(inputFirstname);

        divFirstnameRow.appendChild(divFirstnameCol1);
        divFirstnameRow.appendChild(divFirstnameCol2);


        divLastnameRow.setAttribute('class', 'grid');
        divLastnameCol1.setAttribute('class', 'col-4');
        divLastnameCol2.setAttribute('class', 'col-8 lastname');
        divLastnameCol1.innerHTML = 'Lastname';
        inputLastname.style.width = '100%';
        divLastnameCol2.appendChild(inputLastname);

        divLastnameRow.appendChild(divLastnameCol1);
        divLastnameRow.appendChild(divLastnameCol2);

        container.appendChild(divImageRow);
        container.appendChild(divFirstnameRow);
        container.appendChild(divLastnameRow);

        return container;
    };
    this.getView = function () {
//        alert(this.uuid);
        var divRow = document.createElement('DIV');
        var divImage = document.createElement('DIV');
        var divFirstname = document.createElement('DIV');
        var divLastname = document.createElement('DIV');
//        var divYear = document.createElement('DIV');
        var divSelect = document.createElement('DIV');
        divRow.setAttribute('id', this.uuid);
        divRow.setAttribute('class', "grid");
        divImage.setAttribute('class', "col-4 image");
        divFirstname.setAttribute('class', "col-3 firstname");
        divLastname.setAttribute('class', "col-3 lastname");
        divSelect.setAttribute('class', "col-2 checkbox");
        divFirstname.innerHTML = this.firstname; //"make";
        divLastname.innerHTML = this.lastname; //"model";

        var img = document.createElement('IMG');
        img.src = 'images/app/' + this.image;
        img.width = 300;
        divImage.appendChild(img);
        divRow.appendChild(divImage);
        divRow.appendChild(divFirstname);
        divRow.appendChild(divLastname);
        var checkbox = document.createElement('INPUT');
        checkbox.setAttribute('class', 'selected');
        checkbox.setAttribute('id', 'CB'+uuid);
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
}
