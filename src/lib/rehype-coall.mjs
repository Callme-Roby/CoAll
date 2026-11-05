/**
 * Petites conventions de la documentation :
 * - « [à confirmer] », « [à mettre à jour …] », « [URL de l'app] » deviennent des pastilles visibles ;
 * - un encadré qui commence par « À savoir » prend la couleur ambre.
 */
const TODO = /\[(à confirmer[^\]]*|à mettre à jour[^\]]*|URL de l'app)\]/g;

function walk(node, parent) {
  if (node.type === "element" && node.tagName === "blockquote") {
    const text = JSON.stringify(node).slice(0, 400);
    if (text.includes("À savoir")) {
      node.properties = node.properties || {};
      node.properties.className = [...(node.properties.className || []), "warn"];
    }
  }
  if (node.type === "element" && (node.tagName === "code" || node.tagName === "pre")) return;
  if (!node.children) return;
  const out = [];
  for (const child of node.children) {
    if (child.type === "text" && TODO.test(child.value)) {
      TODO.lastIndex = 0;
      let last = 0;
      let m;
      while ((m = TODO.exec(child.value))) {
        if (m.index > last) out.push({ type: "text", value: child.value.slice(last, m.index) });
        out.push({ type: "element", tagName: "span", properties: { className: ["todo"] }, children: [{ type: "text", value: m[1] }] });
        last = m.index + m[0].length;
      }
      if (last < child.value.length) out.push({ type: "text", value: child.value.slice(last) });
      TODO.lastIndex = 0;
    } else {
      walk(child, node);
      out.push(child);
    }
  }
  node.children = out;
}

export default function rehypeCoall() {
  return (tree) => walk(tree, null);
}
