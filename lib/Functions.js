
//Form Submitted
export function FormSubmitted() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'event': 'form_submitted' });
}

//Button Clicked
export function ButtonClicked() {
    window.dataLayer = window.dataLayer || [];
    return dataLayer.push({ 'event': 'button_clicked' });
}