  // Máscara para telefone
function mascaraTelefone(input) {
    let value = input.value.replace(/\D/g, "").slice(0, 11);
    if (value.length > 6) {
        input.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
        input.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else {
        input.value = value;
    }
}

// Máscara para CPF
function mascaraCPF(input) {
    let value = input.value.replace(/\D/g, "").slice(0, 11);
    if (value.length > 9) {
        input.value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}-${value.slice(9)}`;
    } else if (value.length > 6) {
        input.value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6)}`;
    } else if (value.length > 3) {
        input.value = `${value.slice(0, 3)}.${value.slice(3)}`;
    } else {
        input.value = value;
    }
}

// Validação de senha
function validaSenha(senha) {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{9,}$/;
    return regex.test(senha);
}

// Mensagens personalizadas por campo
function validarFormulario() {
    const mensagens = {
        usuario: "Usuário deve conter apenas letras e no máximo 8 caracteres.",
        senha: "A senha deve ter no mínimo 9 caracteres, incluindo letras, números e símbolos.",
        nome: "O nome é obrigatório.",
        email_usuario: "E-mail inválido ou vazio.",
        cpf: "CPF inválido. Use o formato xxx.xxx.xxx-xx.",
        idade: "Idade é obrigatória.",
        telefone: "Telefone inválido. Use o formato (xx) xxxxx-xxxx.",
        data_de_nascimento: "Informe a data de nascimento.",
        sexo: "Sexo deve conter apenas letras.",
        Nacionalidade: "Nacionalidade obrigatória.",
        cep: "CEP obrigatório.",
        tipo_de_logradouro: "Tipo de logradouro obrigatório.",
        logradouro: "Logradouro obrigatório.",
        bairro: "Bairro obrigatório.",
        cidade: "Cidade obrigatória.",
        Estado: "Selecione um estado.",
    };

    for (const [id, mensagem] of Object.entries(mensagens)) {
        const input = document.getElementById(id);
        if (!input || !input.value || input.value.trim() === "" || (input.tagName === "SELECT" && input.value === "none")) {
            alert(mensagem);
            if (input) input.focus();
            return false;
        }
    }

    const usuario = document.getElementById("usuario").value;
    if (!/^[a-zA-Z]{1,8}$/.test(usuario)) {
        alert(mensagens.usuario);
        return false;
    }

    const senha = document.getElementById("senha").value;
    if (!validaSenha(senha)) {
        alert(mensagens.senha);
        return false;
    }

    return true;
}

 
// Aplica máscara ao digitar
document.addEventListener("DOMContentLoaded", () => {
    const telefone = document.getElementById("telefone");
    const cpf = document.getElementById("cpf");

    if (telefone) {
        telefone.addEventListener("input", () => mascaraTelefone(telefone));
    }

    if (cpf) {
        cpf.addEventListener("input", () => mascaraCPF(cpf));
    }
});