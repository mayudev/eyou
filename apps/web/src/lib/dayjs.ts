import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export default dayjs.extend(relativeTime) as unknown as typeof dayjs;
