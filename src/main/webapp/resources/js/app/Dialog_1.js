/* Create a modal dialog box 
 * 
 * Based on Modal: https://www.w3schools.com/howto/howto_css_modals.asp 
 * 
 * Assumes myLayout.css exists for grid styling
 */
function Dialog(uuid, onClicksubmitFunction, inputs){
    console.log('inputs='+inputs);
    this.onClicksubmitFunction = onClicksubmitFunction;
    this.uuid = uuid;

    this.onSubmit = function () {
        submitButton.onclick = onClicksubmitFunction;
    };
    var divModal = document.createElement('DIV');
    var divModalContent = document.createElement('DIV');
    var divInputs = document.createElement('DIV');
    var divSubmitRow = document.createElement('DIV');
    var divSubmitCol1 = document.createElement('DIV');
    var divSubmitStyle = document.createElement('DIV');

    var spanClose = document.createElement('SPAN');

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
    divModalContent.appendChild(divInputs);
    divModalContent.appendChild(divSubmitRow);

    // Add style for the cancel X
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
    
    this.setInputs=function(inputs){
        divInputs.appendChild(inputs);
    }

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

