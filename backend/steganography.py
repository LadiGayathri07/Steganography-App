from stegano import lsb

def hide_text(image_path, text, output_path):
    secret_image = lsb.hide(image_path, text)
    secret_image.save(output_path)

def reveal_text(image_path):
    return lsb.reveal(image_path)
