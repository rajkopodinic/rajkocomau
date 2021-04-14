//Virtual Page View
export function VirtualPageView() {
    var path = window.location.pathname;
    window.dataLayer = [];
    window.dataLayer.push({
        'event': 'page_view',
        'path': path
    });
}

//Form Submitted
export function FormSubmitted() {
    window.dataLayer = [];
    window.dataLayer.push({ 'event': 'form_submitted' });
}

//Button Clicked
export function ButtonClicked() {
    window.dataLayer = [];
    return dataLayer.push({ 'event': 'button_clicked' });
}