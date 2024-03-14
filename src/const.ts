export const bgColor = `#666b89`;

export const teaserImages = [
    { url: "/teaser/0.jpeg" },
    { url: "/teaser/1.jpeg" },
    { url: "/teaser/2.jpeg" },
    { url: "/teaser/3.jpeg" },
    { url: "/teaser/4.jpeg" },
    { url: "/teaser/5.jpeg" }
];

export const pipelineImage = "/pipeline.jpeg"

export const qualImages = [
    { url: "/qual/0.png" },
    { url: "/qual/1.png" },
    { url: "/qual/2.png" },
    { url: "/qual/3.png" },
    { url: "/qual/4.png" },
    { url: "/qual/5.png" },
    { url: "/qual/6.png" },
    { url: "/qual/7.png" }
];

export const humanImages = [
    [
        { url: "/inthewild/0/h/0.jpeg" },
        { url: "/inthewild/0/h/1.jpeg" },
        { url: "/inthewild/0/h/2.jpeg" },
        { url: "/inthewild/0/h/3.jpeg" }
    ],
    [
        { url: "/inthewild/1/h/0.jpeg" },
        { url: "/inthewild/1/h/1.jpeg" },
        { url: "/inthewild/1/h/2.jpeg" },
        { url: "/inthewild/1/h/3.jpeg" }
    ],
    [
        { url: "/inthewild/2/h/0.jpeg" },
        { url: "/inthewild/2/h/1.jpeg" },
        { url: "/inthewild/2/h/2.jpeg" },
        { url: "/inthewild/2/h/3.jpeg" }
    ],
    [
        { url: "/inthewild/3/h/0.jpeg" },
        { url: "/inthewild/3/h/1.jpeg" },
        { url: "/inthewild/3/h/2.jpeg" },
        { url: "/inthewild/3/h/3.jpeg" }
    ],
    [
        { url: "/inthewild/4/h/0.jpeg" },
        { url: "/inthewild/4/h/1.jpeg" },
        { url: "/inthewild/4/h/2.jpeg" },
        { url: "/inthewild/4/h/3.jpeg" }
    ]
];

export const garmentImages = [
    [
        { url: "/inthewild/0/c1/c1.jpeg" },
        { url: "/inthewild/0/c2/c2.jpeg" },
        { url: "/inthewild/0/c3/c3.jpeg" },
        { url: "/inthewild/0/c4/c4.jpeg" }
    ],
    [
        { url: "/inthewild/1/c1/c1.jpeg" },
        { url: "/inthewild/1/c2/c2.jpeg" },
        { url: "/inthewild/1/c3/c3.jpeg" },
        { url: "/inthewild/1/c4/c4.jpeg" }
    ],
    [
        { url: "/inthewild/2/c1/c1.jpeg" },
        { url: "/inthewild/2/c2/c2.jpeg" },
        { url: "/inthewild/2/c3/c3.jpeg" },
        { url: "/inthewild/2/c4/c4.jpeg" }
    ],
    [
        { url: "/inthewild/3/c1/c1.jpeg" },
        { url: "/inthewild/3/c2/c2.jpeg" },
        { url: "/inthewild/3/c3/c3.jpeg" },
        { url: "/inthewild/3/c4/c4.jpeg" }
    ],
    [
        { url: "/inthewild/4/c1/c1.jpeg" },
        { url: "/inthewild/4/c2/c2.jpeg" },
        { url: "/inthewild/4/c3/c3.jpeg" },
        { url: "/inthewild/4/c4/c4.jpeg" }
    ]
];

export const qualCmpImages = [
    { url: "/qualcmp/0.png" },
    { url: "/qualcmp/1.png" },
    { url: "/qualcmp/2.png" },
    { url: "/qualcmp/3.png" }
];

export const tldr = `IDM-VTON enhances image fidelity and detail preservation in virtual try-on task, particularly in a real-world scenario.`;

export const abstract = `This paper considers image-based virtual try-on, which renders an image of a person wearing a curated garment, given a pair of images depicting the person and the garment, respectively. 
Previous works adapt existing exemplar-based inpainting diffusion models for virtual try-on to improve the naturalness of the generated visuals compared to other methods (e.g., GAN-based), but they fail to preserve the identity of the garments.
To overcome this limitation, we propose a novel diffusion model that improves garment fidelity and generates authentic virtual try-on images. Our method, coined IDM-VTON, uses two different modules to encode the semantics of garment image; given the base UNet of the diffusion model, 1) the high-level semantics extracted from a visual encoder are fused to the cross-attention layer, and then 2) the low-level features extracted from parallel UNet are fused to the self-attention layer.
In addition, we provide detailed textual prompts for both garment and person images to enhance the authenticity of the generated visuals.
Finally, we present a customization method using a pair of person-garment images, which significantly improves fidelity and authenticity. Our experimental results show that our method outperforms previous approaches (both diffusion-based and GAN-based) in preserving garment details and generating authentic virtual try-on images, both qualitatively and quantitatively.
Furthermore, the proposed customization method demonstrates its effectiveness in a real-world scenario. More visualizations are available in our project page.`;

export const approach = `**Overview of pipelne (Left):** 
Our model consists of 1) TryonNet which is a main UNet that processes person image,
2) image prompt adapter (IP-Adapter) that encodes high-level semantics of garment image , and 3) GarmentNet that encodes low-level features.
As of input for UNet, we concatenate the noised latents of person image latents  with the segmentation mask, masked image, and Densepose.
We provide a detailed caption to the garment (e.g., [V]: "short sleeve round neck t-shirts").
Then it is used for input prompt of GarmentNet (e.g., "A photo of [V]") and TryonNet (e.g., "Model is wearing [V]").
\n\n&nbsp;\n\n
**Details of attention modules (Right):**
We demonstrate the proposed model architecture and details on the attention modules.
The intermediate features of TryonNet and GarmentNet are concatenated and passed to the self-attention layer,
and we use the first half (i.e., that from TryonNet) of the output. Then we fuse the output
with features from text encoder and IP-Adapter by cross-attention layer.
We fine-tune the TryonNet and the IP-Adapter modules, and freeze other components.`

export const qual = `Qualitative results of VITON-HD and DressCode datasets. IDM-VTON enables generating high-fidelity images with identifying fine details of the garment. 
Multiple people are wearing same garment showing the consistency in the garment details.`

export const inTheWild = `**Virtual Try-on in the wild:**
To enable virtual try-on in the wild (i.e., real-world scenario), we collect images of garment and mutiple images of person wearing each garment from the internet and social media platforms.
\n\n&nbsp;\n\n
**Customization:**
We further fine-tune TryonNet with a pair of garment and person images via our proposed customization method. Details are illustrated in the paper.
\n\n&nbsp;\n\n
IDM-VTON generates images with a high degree of garment consistency in the real-world scenario. 
Even with the complex backgrounds or diverse poses of the person, it is possible to generate high quality images.`

export const qualCmp = `Qualitative comparisons on three different datasets. 
While prior works struggles to achieving both high fidelity and detail perservation, IDM-VTON generates authentic images and preserve fine-grained details of the garment.`

export const license = `This work is intended solely for academic research and practical illustration purposes without any commercial benefits. 

All models and clothing images used are from internet, social media platforms and public datasets (VITON, DressCode).

All images and brands belong to their rightful owners.`
