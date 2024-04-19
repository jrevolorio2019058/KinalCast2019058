export const validationAvatarURL = (url) => {
  
    const regex = /^(ftp|http|https):\/\/[^ "]+$/
  
    return regex.test(url);
}

export const avatarURLValidationMessage = 'Esta no es una URL valida'
