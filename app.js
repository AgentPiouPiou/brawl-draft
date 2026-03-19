const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImFkNjNmMzdiLTU2OGEtNDRmOC04NWU4LWIwOThlZGJkZjczOSIsImlhdCI6MTc3MzkxOTYyMCwic3ViIjoiZGV2ZWxvcGVyLzJmMGY2MDgxLTVjNTYtNzIwMi04YTE3LTA4ODE3MDczNGQ0ZCIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMC4wLjAuMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.Xq4Ci5t_ujs-ot7IBijBGeEljfpm82MCLs2RCEyJw05yJMYTKSk09pIKNiKk0yHezzBC8bHl2hhmMpV4jwu2Zw";

async function loadPlayer() {
  let tag = document.getElementById("tag").value;

  if (!tag.startsWith("#")) {
    alert("Ajoute # devant le tag");
    return;
  }

  tag = encodeURIComponent(tag);

  const url = `https://corsproxy.io/?https://api.brawlstars.com/v1/players/${tag}`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    });

    const data = await res.json();

    document.getElementById("output").textContent =
      JSON.stringify(data, null, 2);

  } catch (err) {
    console.error(err);
  }
}
