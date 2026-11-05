/**
 * Petites conventions de la documentation :
 * - « [à confirmer] », « [à mettre à jour …] », « [URL de l'app] » restent visibles, soulignés en pointillés ;
 * - un encadré qui commence par « **Astuce** » ou « **À savoir** » affiche ce mot comme titre, sur sa propre ligne.
 */
const TODO = /\[(à confirmer[^\]]*|à mettre à jour[^\]]*|URL de l'app)\]/g;

function walk(node, parent) {
  if (node.type === "element" && node.tagName === "blockquote") {
    // « > **Astuce** — texte » devient un encadré sobre avec son titre sur une ligne.
    const p = node.children.find((c) => c.type === "element" && c.tagName === "p");
    const first = p?.children?.[0];
    if (first?.type === "element" && first.tagName === "strong") {
      const title = first.children.map((c) => c.value || "").join("").trim();
      if (/^(Astuce|À savoir|Exemple|Attention|Important)/.test(title)) {
        first.tagName = "span";
        first.properties = { className: ["note-t"] };
        const next = p.children[1];
        if (next?.type === "text") next.value = next.value.replace(/^\s*[—–:-]\s*/, "");
      }
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
        out.push({ type: "element", tagName: "span", properties: { className: ["todo"], title: "Point à confirmer avant publication" }, children: [{ type: "text", value: "[" + m[1] + "]" }] });
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
