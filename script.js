// Replace this value with the WhatsApp link used to receive enrollment requests.
const CTA_LINK = "https://wa.me/554337712904";

document.querySelectorAll("[data-cta]").forEach((button) => {
  button.href = CTA_LINK;
});
