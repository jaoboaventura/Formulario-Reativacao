function formatInput(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length > 14) {
        value = value.slice(0, 14);
    }

    if (value.length === 11) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (value.length === 14) {
        value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }

    input.value = value;
}