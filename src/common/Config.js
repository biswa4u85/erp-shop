export default {
      siteUrl: 'https://gkdev.bizmap.in',
      hostUrl: 'https://gkdev.bizmap.in',
      token: 'token b3ccfb6880ebecb:1b403ff60ed122d',
      formatDate: (date) => {
            let day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate()
            let month = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1)
            return `${date.getFullYear()}-${month}-${day}`
      },
      formatTodayDateTime(date) {
            var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
            let D = date.toLocaleDateString("en-US", options)
            let T = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
            return `<b>Date:</b> ${D}  <b>Time: </b>  ${T}`
      },
}