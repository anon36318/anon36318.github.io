export const bgColor = `#666b89`;

export const tldr = `IDM-VTON enhances image fideltiy and detail preservation in virtual try-on task, particularly in a real-world scenario.`;

export const abstract = `This paper considers image-based virtual try-on, which renders an image of a person wearing a curated garment, given a pair of images depicting the person and the garment, respectively. 
Previous works adapt existing exemplar-based inpainting diffusion models for virtual try-on to improve the naturalness of the generated visuals compared to other methods (e.g., GAN-based), but they fail to preserve the identity of the garments.
To overcome this limitation, we propose a novel diffusion model that improves garment fidelity and generates authentic virtual try-on images. Our method, coined IDM-VTON, uses two different modules to encode the semantics of garment image; given the base UNet of the diffusion model, 1) the high-level semantics extracted from a visual encoder are fused to the cross-attention layer, and then 2) the low-level features extracted from parallel UNet are fused to the self-attention layer.
In addition, we provide detailed textual prompts for both garment and person images to enhance the authenticity of the generated visuals.
Finally, we present a customization method using a pair of person-garment images, which significantly improves fidelity and authenticity. Our experimental results show that our method outperforms previous approaches (both diffusion-based and GAN-based) in preserving garment details and generating authentic virtual try-on images, both qualitatively and quantitatively.
Furthermore, the proposed customization method demonstrates its effectiveness in a real-world scenario. More visualizations are available in our project page.`;