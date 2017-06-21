/* Create a modal dialog box 
 * 
 * Based on Modal: https://www.w3schools.com/howto/howto_css_modals.asp 
 * 
 * Assumes myLayout.css exists for grid styling
 */
function carModal(uuid, onClicksubmitFunction, car) {
    this.car = car;
    this.onClicksubmitFunction = onClicksubmitFunction;
    this.uuid = uuid;

    var editMode = true;
    if ("undefined" === typeof car) {
        editMode = false;
    }
    this.onSubmit = function () {
        submitButton.onclick = onClicksubmitFunction;
    };
    var divModal = document.createElement('DIV');
    var divModalContent = document.createElement('DIV');
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
    //var div14 = document.createElement('DIV');
    var divYearCol2 = document.createElement('DIV');
    var divSubmitRow = document.createElement('DIV');
    var divSubmitCol1 = document.createElement('DIV');
    var divSubmitStyle = document.createElement('DIV');

    var form = document.createElement('FORM');
    var spanClose = document.createElement('SPAN');
    var inputImage = document.createElement('INPUT');
    var inputMake = document.createElement('INPUT');
    var inputModel = document.createElement('INPUT');
    var inputYear = document.createElement('INPUT');

    if (editMode) {
        inputImage.innerHTML = car.image;
        inputMake.innerHTML = car.make;
        inputModel.innerHTML = car.model;
        inputYear.innerHTML = car.year;
    }
    var submitButton = document.createElement('BUTTON');
    submitButton.innerHTML = 'Submit';

    divModal.setAttribute('id', uuid);
    divModal.setAttribute('class', 'modal');
    // modal styles
    /*
     .modal {
     display: none; // Hidden by default  
     display: fixed; // Stay in place  
     z-index: fixed; //* Sit on top  
     left: 0;
     top: 0;
     width: 100%; //* Full width  
     height: 100%; //* Full height  
     overflow: auto; //* Enable scroll if needed  /
     background-color: rgb(0,0,0); //* Fallback color   
     background-color: rgba(0,0,0,0.4); //* Black w/ opacity  
     }
     .modal-content {
     background-color: #fefefe;
     margin: 10% auto; // 15% from the top and centered //
     padding: 20px;
     border: 1px solid #888;
     width: 70%; // Could be more or less, depending on screen size //
     }
     
     // The Close Button //
     .close {
     color: #aaa;
     float: right;
     font-size: 28px;
     font-weight: bold;
     }
     
     .close:hover,
     .close:focus {
     color: black;
     text-decoration: none;
     cursor: pointer;
     }
     */
    divModal.style.display = 'none';
    divModal.style.position = 'fixed';
    divModal.style.zIndex = '1';
    divModal.style.left = '0';
    divModal.style.top = '0';
    divModal.style.width = '100%';
    divModal.style.height = '100%';
    divModal.style.overflow = 'auto';
    divModal.style.backgroundColor = 'rgb(0,0,0)';
    divModal.style.backgroundColor = 'rgba(0,0,0,0.4)';

    divModalContent.setAttribute('class', 'modal-content');
    divModalContent.style.backgroundColor = '#fefefe';
    divModalContent.style.margin = '10% auto';
    divModalContent.style.padding = '20px';
    divModalContent.style.border = '1px solid #888';
    divModalContent.style.width = '70%';

    divModal.appendChild(divModalContent);
    divModalContent.appendChild(spanClose);
    divModalContent.appendChild(divImageRow);
    divModalContent.appendChild(divMakeRow);
    divModalContent.appendChild(divModelRow);
    divModalContent.appendChild(divYearRow);
    divModalContent.appendChild(divSubmitRow);

// see http://stackoverflow.com/questions/11371550/change-hover-css-properties-with-javascript
    var css = '.close:hover, .close:focus {color: black;text-decoration: none;cursor: pointer;}';
    var style = document.createElement('style');
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
        console.log('style.styleSheet');
    } else {
        console.log('!style.styleSheet');
        style.appendChild(document.createTextNode(css));
    }
    document.getElementsByTagName('head')[0].appendChild(style);

    spanClose.setAttribute('class', 'close');
//    spanClose.setAttribute('onclick', "this.parentElement.parentElement.style.display='none'");
    spanClose.setAttribute('onclick', "var el=document.getElementById('"+uuid+"');document.getElementsByTagName('body')[0].removeChild(el)");
    spanClose.innerHTML = '&times;';
    spanClose.style.color = '#aaa';
    spanClose.style.float = 'right';
    spanClose.style.fontSize = '28px';
    spanClose.style.fontWeight = 'bold';


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

    divSubmitRow.setAttribute('class', 'row');
    divSubmitStyle.style.textAlign = 'right';
    divSubmitCol1.setAttribute('class', 'col-6');
    submitButton.onclick = onClicksubmitFunction;

    divSubmitRow.appendChild(divSubmitCol1);
    divSubmitCol1.appendChild(divSubmitStyle);
    divSubmitStyle.appendChild(submitButton);

    this.getModal = function () {
        return divModal;
    };
    this.getId = function () {
        return uuid;
    };

    /*
     * Implements the following modal dialog box.
     * 
     <div id="addCarModal" class="modal">
     <!-- Modal content -->
     <div class="modal-content">
     <span class="close" onclick="this.parentElement.parentElement.style.display='none'">&times;</span>
     <div class="row">
     <div class="col-2">
     Image
     </div>
     <div class="col-4 image">
     <form>
     <input style='width: 100%' class='image' type="file">
     </form>
     </div>
     </div>
     <div class="row">
     <div class="col-2">
     Make
     </div>
     <div class="col-4">
     <input style='width: 100%' class='make'/>
     </div>
     </div>
     <div class="row">
     <div class="col-2">
     Model
     </div>
     <div class="col-4">
     <input style='width: 100%' class='model'/>
     </div>
     </div>
     <div class="row">
     <div class="col-2">
     Year
     </div>
     <div class="col-4">
     <input style='width: 100%' class='year'/>
     </div>
     </div>
     <div class="row">
     <div class="col-6">
     <div style='text-align: right'>
     <button id='addSubmitButton' onclick="add()" value="Add">Submit</button>
     </div>
     </div>
     </div>
     </div>
     </div>
     
     */
}
;

