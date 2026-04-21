function compose(s1, s2) {
    
    const lines1 = s1.split('\n');
    const lines2 = s2.split('\n');
    /* split to split the strings into arrays */

    const n = lines1.length;

    const rows = [];

    for (let i = 0; i < n; i++) {
        const fromS1 = lines1[i].slice(0, i + 1);
        const s2Line = lines2[n - 1 - i];
        const fromS2 = s2Line.slice(0, n - i);
        rows.push(fromS1 + fromS2);
    }

    return rows.join('\n'); /* joining back together with \n between them for new line */

    /* This one is still tricky to do on my own. This is definitely some thinking required for me */
}