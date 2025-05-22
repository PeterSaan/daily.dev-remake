import { mergeProps } from "solid-js"
import { TopicProps } from "../types/TopicProps";

export default function TopicCard(props: TopicProps) {
	const defaultTopicName = mergeProps({ topicName: "dailydev"}, props);

	return (
		<div class='badge border-zinc-700 rounded-lg bg-base-300'>
			#{defaultTopicName.topicName}
		</div>
	);
}
