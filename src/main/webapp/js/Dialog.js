/* Create a modal dialog box 
 * 
 * Based on Modal: https://www.w3schools.com/howto/howto_css_modals.asp 
 * 
 * Assumes myLayout.css exists for grid styling
 */

function Dialog(uuid, onClicksubmitFunction, object) {
    if(object === undefined){
        alert('undefined object');
        return;
    }
    if(object.uuid === undefined){
        alert('undefined uuid in object');
        return;
    }
    console.log('object=' + object);
    object.modal=this;

    this.object = object;
    this.onClicksubmitFunction = onClicksubmitFunction;
    this.uuid = uuid;

    var divModal = document.createElement('DIV');
    var divModalContent = document.createElement('DIV');
    var divInputs = document.createElement('DIV');
    var divSubmitRow = document.createElement('DIV');
    var divSubmitCol1 = document.createElement('DIV');
    var divSubmitStyle = document.createElement('DIV');

    var spanClose = document.createElement('SPAN');

    var submitButton = document.createElement('BUTTON');
    submitButton.innerHTML = 'Submit';
    submitButton.setAttribute('id', 'ID' + uuid);

    divModal.setAttribute('id', uuid);
    divModal.setAttribute('class', 'modal');
    divModalContent.setAttribute('class', 'modal-content');

    divModal.appendChild(divModalContent);
    divModalContent.appendChild(spanClose);
    divModalContent.appendChild(divInputs);
    divModalContent.appendChild(divSubmitRow);

    var inputs = object.getDialogInputs();
    divInputs.appendChild(inputs);

    spanClose.setAttribute('class', 'close');
    spanClose.setAttribute('onclick', "var el=document.getElementById('" + uuid + "');document.getElementsByTagName('body')[0].removeChild(el)");
    spanClose.innerHTML = '&times;';

    divSubmitRow.setAttribute('class', 'grid');
    divSubmitStyle.style.textAlign = 'right';
    divSubmitCol1.setAttribute('class', 'col-12');
//    submitButton.onclick = this.onClicksubmitFunction2;
    this.onClicksubmitFunction2 = function () {
        var fields = document.getElementById(uuid).getElementsByTagName('input');
        console.log('pp'+fields);
        // you MUST call object.update() to update object properties with new user input
        var obj=object.update(uuid);
        
        var event = new CustomEvent('build', {'detail': object});
        // Listen for the event.
        submitButton.addEventListener('build', onClicksubmitFunction, false);

        // Dispatch the event.
        submitButton.dispatchEvent(event);
    };
    submitButton.addEventListener('click',this.onClicksubmitFunction2);
    
    divSubmitRow.appendChild(divSubmitCol1);
    divSubmitCol1.appendChild(divSubmitStyle);
    divSubmitStyle.appendChild(submitButton);



    this.getObject = function () {
        return this.object;
    };
    this.getModal = function () {
        return divModal;
    };
    this.getId = function () {
        return uuid;
    };
    this.setInputs = function (inputs) {
        divInputs.appendChild(inputs);
    };

    this.closeModal=function(){
        var el = document.getElementById(uuid);
        document.getElementsByTagName('body')[0].removeChild(el);

    }
    this.showModal = function () {
        var body = document.getElementsByTagName("body")[0];
        body.appendChild(divModal);
        var el = document.getElementById(uuid);
        el.style.display = 'block';
    };
}
;
